class InvitedToOrdersController < ApplicationController
  def invite
    @friends = current_user.friendships
    p(@friends)
    puts("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss")
    @inputfriend = User.find_by username: params[:friendName]
    @friends.each do |friend|
      if @inputfriend.id == friend.friend_id
        puts("ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
        respond_to do |format|
          if @inputfriend
            format.json { render json: {'friend':@inputfriend} }
          end
        end
      else
        respond_to do |format|
          format.json { render json: {'Alert':"not found"} }
        end
      end
    end
  end
end
