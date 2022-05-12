import os
from flask import Flask, jsonify, make_response, request, redirect
from models import create_user, get_user
from oauth_notion import notion_oauth
from payment import create_checkout_session
app = Flask(__name__)


# payment
app.add_url_rule('/create-checkout-session', view_func=create_checkout_session, methods=['GET'])

# models
app.add_url_rule('/users/<string:id>', view_func=get_user, methods=['GET'])
# app.add_url_rule('/user', view_func=create_user, methods=['POST'])

# Notion OAuth
app.add_url_rule('/auth/notion/callback', view_func=notion_oauth, methods=['GET'])




@app.route('/')
def index():
    return {'message': 'OK'}

@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)

if __name__ == '__main__':
    app.run(port=5000, debug=True,  ssl_context='adhoc')


