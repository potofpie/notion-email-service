import os
from flask import request
from pynamodb.models import Model
from pynamodb.attributes import NumberAttribute, UnicodeAttribute, Attribute, BINARY
from uuid import uuid4
from Crypto.Cipher import AES
import base64
from Crypto import Random 


NOTION_ENCRYPT_KEY = bytes(os.environ['NOTION_ENCRYPT_KEY'], 'utf-8')

class EncryptedStringAttribute(Attribute):
    attr_type = BINARY

    def serialize(self, value):
        if isinstance(value, str):
            value = value.encode('UTF-8')
        iv = Random.new().read(AES.block_size)
        obj = AES.new(NOTION_ENCRYPT_KEY[:16], AES.MODE_CFB, iv)
        response = obj.encrypt(value)
        response = base64.b64encode(iv + response)
        return response

    def deserialize(self, value):
        return value.decode("utf-8")


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



if __name__ == "__main__":
    UserModel.create_table(read_capacity_units=1,write_capacity_units=1)