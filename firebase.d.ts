declare module 'firebase/auth' {
  export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: any[];
    refreshToken: string;
    tenantId: string;
  }
  export function getAuth(app?: any): any;
  export function signInWithEmailAndPassword(auth: any, email: string, password: string): Promise<any>;
  export function signOut(auth: any): Promise<void>;
  export function onAuthStateChanged(auth: any, callback: (user: User | null) => void): () => void;
}

declare module 'firebase/firestore' {
  export function getFirestore(app?: any): any;
  export function collection(db: any, name: string): any;
  export function addDoc(collectionRef: any, data: any): Promise<any>;
  export function updateDoc(docRef: any, data: any): Promise<void>;
  export function deleteDoc(docRef: any): Promise<void>;
  export function doc(db: any, path: string, ...pathSegments: string[]): any;
  export function getDocs(query: any): Promise<any>;
  export function getDoc(docRef: any): Promise<any>;
  export function setDoc(docRef: any, data: any): Promise<void>;
  export function query(collectionRef: any, ...args: any[]): any;
  export function orderBy(fieldPath: string, directionStr?: 'asc' | 'desc'): any;
}

declare module 'firebase/storage' {
  export function getStorage(app?: any): any;
  export function ref(storage: any, path: string): any;
  export function uploadBytesResumable(ref: any, file: any): any;
  export function getDownloadURL(ref: any): Promise<string>;
}

declare module 'cloudinary' {
  export function v2(config: any): any;
}

declare module '@cloudinary/url-gen' {
  export default class Cloudinary {
    constructor(config: any): this;
  }
}