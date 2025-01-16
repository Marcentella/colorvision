from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.http import JsonResponse

def principal(request):
    return render(request, 'principal.html')

def impresiones(request):
    return render(request, 'impresiones.html')

def contact(request):
    return render(request, 'contact.html')

def testing(request):
    return render(request, 'testing.html')

def submit_form(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        email_subject = "Nuevo mensaje de contacto"
        email_body = f"Nombre: {first_name}\nApellido: {last_name}\nEmail: {email}\nMensaje: {message}"

        send_mail(
            email_subject,
            email_body,
            'zaindotea@gmail.com',  # Replace with your email address
            ['zaindotea@gmail.com'],  # Replace with the desired recipient email address
            fail_silently=False,
        )
        return JsonResponse({'message': 'Email sent successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)

def impresion_digital_offset(request):
    return render(request, 'impresion_digital_offset.html')

def plotter(request):
    return render(request, 'plotter.html')

def otros(request):
    return render(request, 'otros.html')

def servicio(request):
    return render(request, 'servicios.html')