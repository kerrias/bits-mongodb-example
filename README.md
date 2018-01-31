# Mongodb example

This is an example bits module that interacts with the mongodb module. It breaks out things in to two different ways. Using the Mongodb Crud helpers and doing it manually.

# Mongodb Crud

The mongodb crud helpers store lists of information into a database. (Bits does support key values. If your looking for that see the bits-settings module). These lists are kept in sync so if data changes on the server side the UI will get updated in real time.

# Manual

The manual method involves setting up your own messengers. Currently there is no update supported in this example. The data elements only get data once on load. 
