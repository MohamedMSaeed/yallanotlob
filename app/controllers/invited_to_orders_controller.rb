class InvitedToOrdersController < ApplicationController
  def invite
    @friend = User.find_by username: params[:friendName]
    respond_to do |format|
      if @friend
        format.json { render json: {'friend':@friend} }
      end
    end
  end
end
