Rails.application.routes.draw do
  scope '/api' do
    resources :boards
    resources :columns
    resources :tasks
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
