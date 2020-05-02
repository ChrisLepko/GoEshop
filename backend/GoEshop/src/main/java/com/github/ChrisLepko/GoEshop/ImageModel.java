package com.github.ChrisLepko.GoEshop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "image_model")
@AllArgsConstructor
@Data
@NoArgsConstructor
@ToString
public class ImageModel {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Lob
    @Column(name = "pic", length = 1000)
    private byte[] pic;

    //custom Constructor
    public ImageModel (String name, String type, byte[] pic){
        this.name = name;
        this.type = type;
        this.pic = pic;
    }
}
