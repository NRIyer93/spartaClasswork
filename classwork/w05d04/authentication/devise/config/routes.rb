Rails.application.routes.draw do
  devise_for :users

  resources :users
  resources :posts
  root 'static#home'
  get 'user_posts/:user_id' => 'posts#user', as: :user_posts
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
