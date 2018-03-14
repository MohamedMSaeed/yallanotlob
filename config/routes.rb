Rails.application.routes.draw do
  resources :friendships
  devise_for :users
  resources :orders
  resources :groups
  resources :group_members
      get "group_members/:id", to: "group_members#add_friend" 
  resources :users
  authenticated :user do
    root to: 'users#home', as: :authenticated_root
  end
  root to: "start#start"
  get "start/home", to: "start#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
