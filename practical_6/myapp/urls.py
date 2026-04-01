from django.urls import path
from . import views

app_name = 'myapp'

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('attendance/', views.attendance, name='attendance'),
    path('exam/', views.exam, name='exam'),
    path('fees/', views.fees, name='fees'),
    path('student-portal/', views.student_portal, name='student_portal'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup, name='signup'),
    path('logout/', views.logout_view, name='logout'),

    path('items/', views.ItemListView.as_view(), name='item-list'),
    path('item/<int:pk>/', views.ItemDetailView.as_view(), name='item-detail'),
    path('item/add/', views.ItemCreateView.as_view(), name='item-add'),
    path('item/<int:pk>/edit/', views.ItemUpdateView.as_view(), name='item-edit'),
    path('item/<int:pk>/delete/', views.ItemDeleteView.as_view(), name='item-delete'),
]
