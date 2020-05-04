package com.github.ChrisLepko.GoEshop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "product_image")
@AllArgsConstructor
@Data
@NoArgsConstructor
@ToString
public class ProductImage {

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
    public ProductImage(String name, String type, byte[] pic){
        this.name = name;
        this.type = type;
        this.pic = pic;
    }
}
