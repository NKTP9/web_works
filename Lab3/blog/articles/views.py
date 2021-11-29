from .models import Article
from django.shortcuts import render
from django.http import HttpResponse


def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})


def home(request):
    return HttpResponse(u'Hello, World!', content_type="text/plain")
