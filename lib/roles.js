
if (modules.rolesList === undefined)
    modules.rolesList = [];
modules.rolesList.push(
    {role: 'container.view', category:'container', label:'View a container'},
    {role: 'container.list', category:'container', label:'List the containers'},
    {role: 'container.rm', category:'container', label:'Remove a container'},
    {role: 'container.run', category:'container', label:'Run a container'},
    {role: 'container.pause', category:'container', label:'Pause a container'},
    {role: 'container.unpause', category:'container', label:'Unpause a container'},
    {role: 'container.start', category:'container', label:'Start a container'},
    {role: 'container.stop', category:'container', label:'Stop a container'},
    {role: 'container.kill', category:'container', label:'Kill a container'},
    {role: 'container.restart', category:'container', label:'Restart a container'},
    {role: 'container.commit', category:'container', label:'Commit a container'},
//    {role: 'container.copy', category:'container', label:'Copy files from a container'},
    {role: 'container.attach', category:'container', label:'Attach to a container'},
    {role: 'container.rename', category:'container', label:'Rename a container'},
    {role: 'container.update', category:'container', label:'Update a container'},
    {role: 'container.changes', category:'container', label:'View container changes'},
    {role: 'container.logs', category:'container', label:'View container logs'},

    
    {role: 'exec.create', category:'container', label:'Exec a command in a container'},
    {role: 'host.view', category:'host', label:'View hosts'},
    {role: 'host.new', category:'host', label:'Add a new host'},
    {role: 'host.remove', category:'host', label:'Remove an host'},
    {role: 'host.rename', category:'host', label:'Rename an host'},
    {role: 'host.enable', category:'host', label:'Disable/Enable an host'},
    {role: 'image.view', category:'image', label:'View an image'},
    {role: 'image.list', category:'image', label:'List images'},
    {role: 'image.pull', category:'image', label:'Pull an image from a registry'},
    {role: 'image.push', category:'image', label:'Push an image to a registry'},
    {role: 'image.rm', category:'image', label:'Remove an image'},
    {role: 'image.run', category:'image', label:'Run an image'},
    {role: 'image.tag', category:'image', label:'Tag an image'},

    {role: 'volume.list', category:'volume', label:'List volumes'},
    {role: 'volume.create', category:'volume', label:'Create a new volume'},
    {role: 'volume.inspect', category:'volume', label:'Inspect a volume'},
    {role: 'volume.remove', category:'volume', label:'Remove a volume'},

    {role: 'network.list', category:'network', label:'List networks'},
    {role: 'network.create', category:'network', label:'Create a new network'},
    {role: 'network.inspect', category:'network', label:'Inspect a network'},
    {role: 'network.remove', category:'network', label:'Remove a network'},
    {role: 'network.connect', category:'network', label:'Connect a network'},
    {role: 'network.disconnect', category:'network', label:'Disconnect a network'},


    {role: 'swarms.list', category:'swarms', label:'List swarms'},
    {role: 'swarms.init', category:'swarms', label:'Init swarms'},
    {role: 'swarms.join', category:'swarms', label:'Join a swarm'},
    {role: 'swarms.leave', category:'swarms', label:'Leave a swarm'},
    {role: 'swarms.update', category:'swarms', label:'Update a swarms'},
    {role: 'swarms.inspect', category:'swarms', label:'Inspect a swarm'},
    
    {role: 'nodes.list', category:'nodes', label:'List nodes'},
//    {role: 'nodes.create', category:'nodes', label:'Create a new node'},
    {role: 'nodes.inspect', category:'nodes', label:'Inspect a node'},
    {role: 'nodes.remove', category:'nodes', label:'Remove a node'},

    {role: 'services.list', category:'services', label:'List services'},
    {role: 'services.create', category:'services', label:'Create a new service'},
    {role: 'services.inspect', category:'services', label:'Inspect a service'},
    {role: 'services.remove', category:'services', label:'Remove a service'},
    {role: 'services.update', category:'services', label:'Update a service'},

    {role: 'tasks.list', category:'tasks', label:'List tasks'},
    {role: 'tasks.inspect', category:'tasks', label:'Inspect a task'},

    {role: 'roles.edit', category:'role', label:'Edit roles'}
//    {role: 'admin',category:'admin', label:'Admin (All Permissions)'}
);
