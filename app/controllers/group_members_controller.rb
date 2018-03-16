class GroupMembersController < ApplicationController

  def destroy
# @group = Group.find(params[:group_id])
 @group_member = GroupMember.find(params[:id])
    @group_member.destroy
    respond_to do |format|
      format.html { redirect_to root_url, notice: 'Group member was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def create
    @group = Group.find(params[:group_id])
    @group_member = @group.group_members.build(:user_id => params[:user_id],:group_id => params[:group_id] )

    if @group_member.save
      flash[:notice] = "Added friend."
      redirect_to root_url
    else
      flash[:error] = "Unable to add friend."
      redirect_to root_url

    end
  end

  def index

    @group_members = []
    @members_id = GroupMember.where(group_id: params[:id])
    @members_id.each do |member|
      friends = User.where(id: member.user_id)
      friends.each do |friend|
        @group_members.push(friend);
      end
    end
    
    print(@group_members)
    render json: @group_members

  end

    end
