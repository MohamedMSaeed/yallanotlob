Rails.application.routes.draw do
  resources :friendships
  devise_for :users , :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :orders
  resources :groups
  resources :group_members
      get "group_members/:id", to: "group_members#add_friend" 
  resources :users
  # authenticated :user do
    root to: 'users#home', as: :authenticated_root
  # end
  root to: "start#start"
  get "start/home", to: "start#home"
  post "invited_to_orders/invite", to: "invited_to_orders#invite"
  mount ActionCable.server => '/cable'
  post "friendships/add_friend", to: "friendships#add_friend"
  post "invited_to_orders/inviteGroup", to: "invited_to_orders#inviteGroup"
  post "/orders/putList", to: "orders#putList"
  resources :order_details
  post "/group_members/delete", to: "group_members#delete"
  post "/group_members/add", to: "group_members#add"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


end
