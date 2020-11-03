import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'

import { addVersion } from './util'
import { prepareGenerationLinkForm } from './form-util'
import { createGenerateLinkForm } from './form-generation-link'

createGenerateLinkForm()
prepareGenerationLinkForm()
addVersion(process.env.VERSION)
