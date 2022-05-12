from pynamodb.attributes import NumberAttribute, UnicodeAttribute
from pynamodb.models import Model
from models.encrypted_string_attribute import EncryptedStringAttribute



class UserModel(Model):
    """
    A DynamoDB User
    """
    class Meta:
        host = 'http://localhost:8000'
        table_name = 'users-table-dev'
        region = 'us-west-1'
    id = UnicodeAttribute(hash_key=True)
    email = UnicodeAttribute()
    first_name = UnicodeAttribute(null=True)
    last_name = UnicodeAttribute(null=True)
    trial_email_count = NumberAttribute(default=100)
    notion_access_token = EncryptedStringAttribute(null=True)


def get_user(id):
    user = UserModel.get(hash_key=id)
    return user.attribute_values
