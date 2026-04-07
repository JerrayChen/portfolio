import { create } from 'smbls'
import * as app from './smbls/index.js'

const basePath = window.location.pathname.startsWith('/portfolio') ? '/portfolio' : ''
create({ basePath }, app)
