from django.shortcuts import render
from django.core.mail import EmailMessage
from django.http import HttpResponse
# Create your views here.

def contact(request):
    if request.method == "GET":
        return render(request,'contact.html')
    else:
        s_email = request.POST.get('email')
        r_email = 'cmounikasagar@gmail.com'
        Subject = "Automatic mail"
        Message = request.POST.get('message')
        EmailMessage(
            Subject,
            Message,
            to=[r_email],
            reply_to=[s_email]
        ).send(fail_silently=False)
        return HttpResponse("Email sent")