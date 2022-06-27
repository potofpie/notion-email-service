from models.user_model import UserModel
def lambda_handler(event, context): 
    id = event.get('userName', {})
    email = event.get('request', {}).get('userAttributes', {}).get('email', {})
    try:
        user_exists = UserModel.get(hash_key=id)
        return event
    except:
        print("User does not exist.")
    user = UserModel(id=id, email=email)
    user.save()
    return event


if __name__ == '__main__':
    event = {
                'version': '1', 
                'region': 'us-east-1', 
                'userPoolId': 'us-east-1_VkA9kFswG', 
                'userName': 'Google_114090448331757543240', 
                'callerContext': {'awsSdkVersion': 'aws-sdk-unknown-unknown', 'clientId': '6mtdefhg22pcvnh6tft6jkk5mf'}, 
                'triggerSource': 'PostAuthentication_Authentication', 
                'request': {
                'userAttributes': 
                    {
                        'sub': '55134b36-d4fa-47f1-b651-623ea9fdb513', 
                        'email_verified': 'false',
                        'cognito:user_status': 'EXTERNAL_PROVIDER',
                        'identities': '[{"userId":"114090448331757543240","providerName":"Google","providerType":"Google","issuer":null,"primary":true,"dateCreated":1656275822341}]', 
                        'email': 'rec3college@gmail.com'
                    }, 
                'newDeviceUsed': False}, 
                'response': {}
            }
    lambda_handler(event, {})


    
    