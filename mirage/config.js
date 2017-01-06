export default function() {
  this.namespace = '/mirage';

  this.get('/languages', function(){
    return {
      data: [{
        type: 'languages',
        id: '1',
        attributes: {
          name: 'Vafuna',
          description: 'some weird language',
        }
      }, {
        type: 'languages',
        id: '2',
        attributes: {
          name: 'Nkalo',
          description: 'Some other language',
        }
      }, {
        type: 'languages',
        id: '3',
        attributes: {
          name: 'Kelen',
          description: 'this language doesn\'t verb',
        }
      }]
    };
  });
}
