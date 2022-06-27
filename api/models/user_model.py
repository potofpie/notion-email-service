from pynamodb.attributes import NumberAttribute, UnicodeAttribute
from pynamodb.models import Model
from stripe import Subscription
from models.encrypted_string_attribute import EncryptedStringAttribute



class UserModel(Model):
    """
    A DynamoDB User
    """
    class Meta:
        table_name = 'users-table-dev'
    id = UnicodeAttribute(hash_key=True)
    email = UnicodeAttribute()
    first_name = UnicodeAttribute(null=True)
    last_name = UnicodeAttribute(null=True)
    trial_email_count = NumberAttribute(default=100)
    subscription_id = EncryptedStringAttribute(null=True)
    notion_access_token = EncryptedStringAttribute(null=True)


def get_user(id):
    user = UserModel.get(hash_key=id)
    return user.attribute_values
