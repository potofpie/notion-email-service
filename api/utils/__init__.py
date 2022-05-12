import os, base64
from Crypto.Cipher import AES

NOTION_ENCRYPT_KEY = bytes(os.environ['NOTION_ENCRYPT_KEY'], 'utf-8')

def decrypt_notion_token():
    value = base64.b64decode(value)
    iv = value[:AES.block_size]
    obj = AES.new(NOTION_ENCRYPT_KEY[:16], AES.MODE_CFB, iv)
    response = obj.decrypt(value)
    response = response[AES.block_size:]
    return response.decode("utf-8") 