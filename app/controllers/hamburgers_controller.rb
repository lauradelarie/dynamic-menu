class HamburgersController < ApplicationController
  before_action :authenticate_user!, only: :admin

  def index

  end

  def burger
    @burgers = Burger.all
    @toppings = Topping.all
    @sauces = Sauce.all
    @sides = Side.all
  end

  def admin
    @hamburgers = Order.all
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


  def update
    hamburger = Order.find(params[:id])
    hamburger.update(order_params)
    if hamburger.save
      render status: 200, json: {
        order: hamburger
      }.to_json
    else
      render status: 422, json: {
        error: hamburger.errors.full_messages
      }.to_json
    end
  end



  private

    def order_params
      params.require(:order).permit(:total_price, :choise, :served, :table)
    end

end
