Rails.application.routes.draw do
  root 'chatrooms#index'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  post 'messages', to: 'messages#create'
  resources :users
  get 'signup', to: 'users#new'
  
  mount ActionCable.server, at: '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
