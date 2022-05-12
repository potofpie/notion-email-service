import requests
from flask import jsonify, request
import base64

oauth_client_id = "2d8f7261-aa06-46d4-8c5b-8e89a69db552"
shhh = "secret_U87amXHFdyiATmS5EMJFGo9OjFsl7br6ne9jv0dTM7w"



def get_token():
    code = request.args.get('code')
    basic_token = f"{oauth_client_id}:{shhh}"
    basic_token_encode = basic_token.encode('ascii')
    basic_token_encode_bytes = base64.b64encode(basic_token_encode)
    basic_token_encode_bytes_string = basic_token_encode_bytes.decode('ascii')

    data = {
        "grant_type": "authorization_code",
        "code": code    
    }
    headers = {
        "Authorization":f"Basic {basic_token_encode_bytes_string}",
        "Content-Type": "application/json"
    }
    r = requests.post(headers=headers,url="https://api.notion.com/v1/oauth/token", json=data)

    if(r.status_code != 200):
        raise Exception("code, client_id, or client_secret must be fucked!")
    res_data = r.json()
    access_token = res_data["access_token"]
    return access_token


def get_databases(access_token):
    headers = {
        "Authorization":f"Bearer {access_token}",
        "Content-Type": "application/json",
        "Notion-Version": "2022-02-22"
    }
    data = { "filter": { "property": "object", "value": "database" } }
    r = requests.post(headers=headers,url="https://api.notion.com/v1/search", json=data)
    results = r.json()

    print(results["results"])

    return results['results'][0]

    

def notion_oauth():
    access_token = get_token()    
    databases = get_databases(access_token)
    return databases


