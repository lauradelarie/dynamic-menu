class TablesController < ApplicationController


  def update
    table = Table.find(params[:id])
    table.update(table_params)
    if table.save
      render status: 200, json: {
        table: table
      }.to_json
    else
      render status: 422, json: {
        error: table.errors.full_messages
      }.to_json
    end
  end


private

    def table_params
      params.require(:table).permit(:taken)
    end

end
