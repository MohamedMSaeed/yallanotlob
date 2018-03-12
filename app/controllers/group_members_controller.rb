class GroupMembersController < ApplicationController
  before_action :set_group_member, only: [:show, :edit, :update, :destroy]

  # GET /groups
  # GET /groups.json
  def index
    @group_members = GroupMember.all
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
  

  end

 def add_friend
   @group_member = GroupMember.new

    respond_to do |format|
      if @group_member.save
        format.html { redirect_to @group_member, notice: 'Group member was successfully added.' }
        format.json { render :show, status: :created, location: @group_member }
      else
        format.html { render :new }
        format.json { render json: @group_member.errors, status: :unprocessable_entity }
      end
    end
   end

  # GET /groups/new
  def new
    @group_member = GroupMember.new
  end

  # GET /groups/1/edit
  def edit
  end

  # POST /groups
  # POST /groups.json
  def create
    @group_member = GroupMember.new

    respond_to do |format|
      if @group_member.save
        format.html { redirect_to @group_member, notice: 'Group member was successfully added.' }
        format.json { render :show, status: :created, location: @group_member }
      else
        format.html { render :new }
        format.json { render json: @group_member.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    respond_to do |format|
      if @group_member.update(group_member_params)
        format.html { redirect_to @group_member, notice: 'Group member was successfully updated.' }
        format.json { render :show, status: :ok, location: @group_member }
      else
        format.html { render :edit }
        format.json { render json: @group_member.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group_member.destroy
    respond_to do |format|
      format.html { redirect_to groups_url, notice: 'Group member was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group_member
      @group_member = GroupMember.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def group_member_params
      params.require(:group_member).permit(:group_id, :friendship_id)
    end
end
