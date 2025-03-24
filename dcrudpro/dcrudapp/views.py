from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import *
from .forms import *

def Createdata(request):
    if request.method == 'POST':
        form = StudentForms(request.POST)
        if form.is_valid():
            form.save()
            
            return redirect(display)
        else:
            form = StudentForms()
        return redirect(display)
    else:
        form = StudentForms(request.POST)
        return render(request,'Create.html',{'form':form})
    
def display(request):
    data = Student.objects.all()
    return render(request,'display.html',{'data':data})

def updatedata(request,id):
    row = Student.objects.get(id=id)
    return render(request,'update.html',{'row':row})

def updaterow(request,id):
    data = Student.objects.get(id=id)
    data.s_name = request.POST.get('s_name')
    data.s_roll_no = request.POST.get('s_roll_no')
    data.s_address = request.POST.get('s_address')
    data.save()
    return redirect(display)

def deletedata(request,id):
    data = Student.objects.get(id=id)
    data.delete()
    return redirect(display)