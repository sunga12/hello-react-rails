class RootController < ApplicationController
  def index
    @random_greeting = Greeting.order('RANDOM()').first.message
    # render json:{ message: @random_greeting}
  end
end
