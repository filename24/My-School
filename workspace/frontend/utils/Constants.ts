import { FirebaseOptions } from "firebase/app"

export const Brand = {
  name: 'My School',
  colors: {
    primary: '#4287f5',
    header: '#1e40af'
  }
}

export const enum GoogleSystem {
  TrackingID = 'G-DHTH501J9H',
  AdClientID = 'ca-pub-7935437181809915',
  AdSlotID = '2016744273'
}

export const enum RateLimit {
  reloadTime = 60 * 1000 * 10,
  max = 500,
}

export const WebhookData = {
  url: process.env.WebhookURL,
}

export const FirebaseConfig: FirebaseOptions = {
  apiKey: process.env.FirebaseAPIKey,
  authDomain: process.env.FirebaseAuthDomain,
  projectId: process.env.FirebaseProjectID,
}