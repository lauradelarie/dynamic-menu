class OrdersController < ApplicationController

  def create
    @order = Order.create(order_params)
  end

  def new
    @order = Order.new
  end



  private

  def order_params
    params.require(:order).permit(:name, :choise, :total_price)
  end
end
