from pynamodb.attributes import NumberAttribute, UnicodeAttribute
from pynamodb.models import Model
# from stripe import Subscription
# from models.encrypted_string_attribue import EncryptedStringAttribute



class UserModel(Model):
    """
    A DynamoDB User
    """
    class Meta:
        table_name = 'users-table-dev'
    id = UnicodeAttribute(hash_key=True)
    email = UnicodeAttribute()


# def get_user(id):
#     user = UserModel.get(hash_key=id)
#     return user.attribute_values
