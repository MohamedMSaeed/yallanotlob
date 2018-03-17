class OrderDetailsController < ApplicationController

  def destroy
 @order_detail = OrderDetail.find(params[:id])
    @order_detail.destroy
    respond_to do |format|
      format.html { redirect_to root_url, notice: 'your order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def create
    @order = Order.find(params[:order_id])
    @order_detail = @order.order_details.build(:order_id => params[:order_id],:user_id => params[:user_id],:item => params[:item],:amount => params[:amount],:price => params[:price],:comment => params[:comment] )

    if @order_detail.save
      flash[:notice] = "Added your order."
      
    else
      flash[:error] = "Unable to add order."


    end
render json: @order_detail
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
