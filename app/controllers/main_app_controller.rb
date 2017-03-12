class MainAppController < ApplicationController
  def index
    @main_app_props = { name: "Stranger" }
  end
end
