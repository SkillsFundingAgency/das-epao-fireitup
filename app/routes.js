module.exports = {
  bind: function (app) {
    app.get('/', function (req, res) {
      res.render('index')
    })
    app.get('/components/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('components/' + compName, {action: req.query.action, type: req.query.type})
    })
    app.get('/components/:compFolder/:compName', function (req, res) {
      var compFolder = req.params.compFolder;
      var compName = req.params.compName;
      res.render('components/' + compFolder + '/' + compName, {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/:pageName', function (req, res) {
      var pageName = req.params.pageName;
      res.render('campaign/' + pageName , {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/components/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/components/' + compName +'/' + compName , {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/employer/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/employer/' + compName , {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/FAT/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/FAT/' + compName , {id: req.query.id, providerId: req.query.providerId, type: req.query.type})
    })
    app.get('/campaign/apprentice/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/apprentice/' + compName , {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/real-stories/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/real-stories/' + compName , {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/apprentice-interests/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/apprentice-interests/' + compName , {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/employer-industries/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/employer-industries/' + compName , {action: req.query.action, type: req.query.type})
    })
    app.get('/campaign/register/:compName', function (req, res) {
      var compName = req.params.compName;
      res.render('campaign/register/' + compName , {action: req.query.action, type: req.query.type})
    })
    app.get('/services/:journey/:stepId', function (req, res) {
      var stepId = req.params.stepId;
      var journey = req.params.journey;
      res.render('services/' + journey + '/' + stepId, {action: req.query.action, type: req.query.type})
    })
    app.get('/services/:journey/:subFolder/:stepId', function (req, res) {
      var stepId = req.params.stepId;
      var subFolder = req.params.subFolder;
      var journey = req.params.journey;
      res.render('services/' + journey + '/' + subFolder + '/' + stepId, {action: req.query.action, type: req.query.type})
    })
    app.get('/legacy/:journey/:stepId', function (req, res) {
      var stepId = req.params.stepId;
      var journey = req.params.journey;
      res.render('legacy/' + journey + '/' + stepId, {action: req.query.action, type: req.query.type})
    })

    app.get('/campaign/json/:fileId', function (req, res) {
      var fileId = req.params.fileId;
      res.render('campaign/json/' + fileId + '.json')
    })
    app.get('/campaign/json/b664nd/:fileId', function (req, res) {
      var fileId = req.params.fileId;
      res.render('campaign/json/b664nd/' + fileId + '.json')
    })
  }
}
