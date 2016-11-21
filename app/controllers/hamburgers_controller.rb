class HamburgersController < ApplicationController


  def index

  end

  def burger
    @burgers = Burger.all
    @toppings = Topping.all
    @sauces = Sauce.all
    @sides = Side.all
  end


end
