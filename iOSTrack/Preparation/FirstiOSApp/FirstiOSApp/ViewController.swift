//
//  ViewController.swift
//  FirstiOSApp
//
//  Created by JHKim on 29/06/2019.
//

import UIKit
import GoogleMaps
import GooglePlaces

class ViewController: UIViewController {
    
    let marker = GMSMarker()

    @IBOutlet weak var mapView: UIView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        let camera = GMSCameraPosition.camera(withLatitude: 37.498508, longitude: 127.034222, zoom: 15.0)
        let mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        mapView.settings.myLocationButton = true
        view = mapView
        
        // Creates a marker in the center of the map.
        marker.position = CLLocationCoordinate2D(latitude: 37.498508, longitude: 127.034222)
        marker.title = "megazone"
        marker.snippet = "Korea"
        marker.map = mapView
    }


}

