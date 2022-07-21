from models.user_model import UserModel
from apig_wsgi import make_lambda_handler
from flask import Flask, jsonify, make_response, request, redirect
app = Flask(__name__)




@app.route('/add_email', methods=['POST'])
def add_email():
    data = request.get_json()
    try:
        user_exists = UserModel.get(hash_key=id)
    except:
        print("User does not exist.")
    user = UserModel(id='derp', email=data['email'])
    user.save()
    return {'message': 'OK'}

@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)

lambda_handler = make_lambda_handler(app)


if __name__ == '__main__':
    import sys
    action = sys.argv[1]
    if(action == 'start'):
        app.run(port=5001, debug=True)
    elif(action == 'create_db'):
        from models import UserModel
        UserModel.create_table(read_capacity_units=1,write_capacity_units=1)

