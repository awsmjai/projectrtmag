class HomeController < ApplicationController
  
	def features
		render :layout => 'features'
	end

  def result
    get_client
    unless params[:address].blank?
      lat = Geocoder.search(params[:address]).first.coordinates.first
      lng = Geocoder.search(params[:address]).first.coordinates.last
      @tweet = @client.search("#{params[:key]} filter:images", :include_entities=>true, :geocode => "#{lat},#{lng},10mi", :result_type => "recent").take(20)
    else
      @tweet = @client.search("#{params[:key]} filter:images", :include_entities=>true, :result_type => "recent").take(50)
    end

    client = Instagram.client(:access_token => session[:access_token])

    unless params[:key].blank?
      tags = client.tag_search(params[:key])
      @tag = client.tag_recent_media(tags[0].name, count: 50)
    else  
      lat = Geocoder.search(params[:address]).first.coordinates.first
      lng = Geocoder.search(params[:address]).first.coordinates.last
      @tag=client.media_search(lat, lng, options = {:count => 5})
    end  
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
