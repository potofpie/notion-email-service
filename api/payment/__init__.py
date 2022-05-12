import stripe, os
from flask import redirect
import stripe

stripe.api_key = os.environ['STRIPE_API_KEY']
API_URL = os.environ['API_URL']
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': 'price_1KxGIqHR4YBWPEaFeijvgHlf',
                    'quantity': 1,
                },
            ],
            mode='subscription',
            success_url=API_URL + '?success=true',
            cancel_url=API_URL + '?canceled=true',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)