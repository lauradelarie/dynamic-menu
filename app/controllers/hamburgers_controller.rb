class HamburgersController < ApplicationController


  def index

  end

  def burger
    @burgers = Burger.all
    @toppings = Topping.all
    @sauces = Sauce.all
    @sides = Side.all
  end

  def create
    order = Order.create(order_params)
    if order.save
      render status: 200, json: {
        order: order
      }.to_json
    else
      render status: 422, json: {
        error: order.errors.full_messages
      }.to_json
    end
  end



  private

    def order_params
      params.require(:order).permit(:total_price, :choise)
    end

end
