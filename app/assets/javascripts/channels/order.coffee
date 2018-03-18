App.order = App.cable.subscriptions.create "OrderChannel",
  connected: ->
    # Called when the subscription is ready for use on the ser
#    console.log " Hello Hala"

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
       
    # Called when there's incoming data con the websocket for this channel
    console.log(data['order'])
    console.log(data['createdby'])
    $("#friends_activities").append('<p>hi</p>')

