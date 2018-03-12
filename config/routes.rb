Rails.application.routes.draw do
  resources :friendships
  devise_for :users
  resources :orders
  resources :groups
resources :group_members
      post "group_members/:id", to: "group_members#add_friend" #=> domain.com/admin/users/:user_id/hall/:id
  resources :users
  root to: "users#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
