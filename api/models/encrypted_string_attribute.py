import os
from pynamodb.attributes import Attribute, BINARY
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