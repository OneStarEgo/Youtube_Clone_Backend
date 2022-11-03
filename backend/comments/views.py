from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404, get_list_or_404


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    if request.method == 'GET':
        comments= get_list_or_404(Comment)
        serializer= CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method =='POST':
        print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def video_comments(request, video_id):
    comments = get_list_or_404;{Comment, video_id==video_id}
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)