class DistanceService {
  toRadians(degrees: number): number {
      return degrees * (Math.PI / 180);
  }

  calculateDistance(objet1: { lat: number; lng: number }, objet2: { lat: number; lng: number }, radio: number): boolean {
    if (objet1 && objet2) {
      const earthRadius = 6371; // Radio de la Tierra en kilómetros
      // Convertir las coordenadas de grados a radianes
      const lat1Rad = this.toRadians(objet1.lat);
      const lat2Rad = this.toRadians(objet2.lat);
      const deltaLat = this.toRadians(objet2.lat - objet1.lat);
      const deltaLng = this.toRadians(objet2.lng - objet1.lng);
    
      // Calcular la fórmula de Haversine
      const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadius * c * 1000;
      // Verificar si la distancia está dentro del radio especificado
      console.log('distance');
      console.log(distance);
      console.log('distance');
      
      return distance <= radio;
    }else{
      return false;
    }
  }
}

export default new DistanceService();