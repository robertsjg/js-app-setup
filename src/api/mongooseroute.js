'use strict';
import _ from 'lodash';
import ApiMongooseSchema from '../api/mongoosemodel.js';

export default function(app) {

    /* New */
    app.post('/api', function(req, res) {
        var newApi = new ApiMongooseSchema(req.body);
        newApi.save(function(err) {
            if (err) {
                res.json({ info: 'error during create', error: err });
            }
            res.json({ info: 'Created successfully' });
        });
    });

    /* Select */
    app.get('/api', function(req, res) {
        ApiMongooseSchema.find(function(err, apiobjects) {
            if (err) {
                res.json({ info: 'not found', error: err });
            }
            res.json({ info: 'Found successfully', data: apiobjects });
        });
    });

    app.get('/api/:id', function(req, res) {
        ApiMongooseSchema.findById(req.params.id, function(err, apiobject) {
            if (err) {
                res.json({ info: 'not found', error: err });
            }
            if (apiobject) {
                res.json({ info: 'Found successfully', data: apiobject });
            } else {
                res.json({ info: 'object not found' });
            }
        });
    });

    /* Update */
    app.put('/api/:id', function(req, res) {
        ApiMongooseSchema.findById(req.params.id, function(err, apiobject) {
            if (err) {
                res.json({ info: 'error', error: err });
            }
            if (apiobject) {
                _.merge(apiobject, req.body);
                apiobject.save(function(saveerr) {
                    if (saveerr) {
                        res.json({ info: 'error during update', error: saveerr });
                    }
                    res.json({ info: 'Updated successfully' });
                });
            } else {
                res.json({ info: 'Not found' });
            }
        });
    });

    /* remove */
    app.delete('/api/:id', function(req, res) {
        ApiMongooseSchema.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                res.json({ info: 'error', error: err });
            }
            res.json({ info: 'Removed ok' });
        });
    });
}