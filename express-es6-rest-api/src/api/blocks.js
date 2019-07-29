import resource from 'resource-router-middleware';
import axios from 'axios';
const CircularJSON = require('circular-json');
export default ({ config, db }) => resource({


	/** GET / - List all entities */
	index({ params }, res) {
      axios.get('https://blockchain.info/blocks?format=json').then((respose)=>{
            let json = respose.data.blocks;
            res.send({data:json,success:true});
      }).catch(err=>{
            res.json({error:'true',status:'201',message:'unable to fetch the blockchain api'});
      })
	},

	/** POST / - Create a new entity */
	// create({ body }, res) {
	// 	body.id = facets.length.toString(36);
	// 	facets.push(body);
	// 	res.json(body);
	// },

    /** GET /:id - Return a given entity */

	read(req,{hash},res) {
        axios.get(`https://blockchain.info/rawblock/${req.params.undefined}`).then((respose)=>{
            let json = respose;
            res.send({data:json,success:true});
      }).catch(err=>{
          //console.log(err);
            res.json({error:'true',status:'201',message:`unable to fetch the ${hash} hash details`});
      })
 
		
	},

	// /** PUT /:id - Update a given entity */
	// update({ facet, body }, res) {
	// 	for (let key in body) {
	// 		if (key!=='id') {
	// 			facet[key] = body[key];
	// 		}
	// 	}
	// 	res.sendStatus(204);
	// },

	// /** DELETE /:id - Delete a given entity */
	// delete({ facet }, res) {
	// 	facets.splice(facets.indexOf(facet), 1);
	// 	res.sendStatus(204);
	// }
});
