from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from .models import Item

# Static page views
@login_required
def dashboard(request):
    return render(request, 'Dashboard.html')

@login_required
def attendance(request):
    return render(request, 'attendence.html')

@login_required
def exam(request):
    return render(request, 'exam.html')

@login_required
def fees(request):
    return render(request, 'fees.html')

@login_required
def student_portal(request):
    return render(request, 'student_portal.html')

# Auth views
def login_view(request):
    if request.user.is_authenticated:
        return redirect('myapp:dashboard')

    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            messages.success(request, 'Login successful.')
            return redirect('myapp:dashboard')
        else:
            messages.error(request, 'Invalid credentials.')
    else:
        form = AuthenticationForm()

    return render(request, 'Login.html', {'form': form})


def signup(request):
    if request.user.is_authenticated:
        return redirect('myapp:dashboard')

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Account created and logged in.')
            return redirect('myapp:dashboard')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = UserCreationForm()

    return render(request, 'Sign-Up.html', {'form': form})


@login_required
def logout_view(request):
    logout(request)
    messages.info(request, 'You have been logged out.')
    return redirect('myapp:login')


class ItemListView(LoginRequiredMixin, ListView):
    model = Item
    template_name = 'myapp/item_list.html'
    context_object_name = 'items'


class ItemDetailView(LoginRequiredMixin, DetailView):
    model = Item
    template_name = 'myapp/item_detail.html'
    context_object_name = 'item'


class ItemCreateView(LoginRequiredMixin, CreateView):
    model = Item
    fields = ['title', 'description']
    template_name = 'myapp/item_form.html'
    success_url = reverse_lazy('myapp:item-list')


class ItemUpdateView(LoginRequiredMixin, UpdateView):
    model = Item
    fields = ['title', 'description']
    template_name = 'myapp/item_form.html'
    success_url = reverse_lazy('myapp:item-list')


class ItemDeleteView(LoginRequiredMixin, DeleteView):
    model = Item
    template_name = 'myapp/item_confirm_delete.html'
    success_url = reverse_lazy('myapp:item-list')

