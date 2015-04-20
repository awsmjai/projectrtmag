class HomeController < ApplicationController
  
	def features
		render :layout => 'features'
	end

  def result
    get_client
      @tweet = @client.search("#{params[:key]} filter:images", :include_entities=>true, :result_type => "recent").take(50)
   end

  def get_client
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "5rHv2ZmtpLT5ANcRwP6HnWFnI"
      config.consumer_secret     = "2HqQ1zcQDsCSauD5mKa8DDh6F8n6KXEH2vtw4m9MRBcs6QxBkB"
  	  config.access_token        = "2381587561-PAfyvBC02Ne8E6x4YFrla4LIQUOuOb7An1qzpLM"
  	  config.access_token_secret = "XrKEVZ6wZ9artQmn9GKYDiyZirB0yJf8GFJpqckzXdtCH"
	  end
  end

  
end
