const dress = [
  {
    id: "navy-polkadot-flare-dress",
    title: "Navy Polkadot Flare Dress",
    price: "200.000 IDR",
    images: [
      [
        {
          id: 0,
          link: "navy-polkadot-1-1.webp",
          alt: "navy-polkadot-1-1",
          blurDataUrl:
            "data:image/webp;base64,UklGRnoDAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggjAEAADAYAJ0BKhoBvAA+7XawVKmnJCMgK9EwHYlpbuBSPb/twM/+lOscl+ACuMixtb8OroiH0mo41A1xcD0IKjMyn9o/sU1oY7tCC1nL0TFPOq6ZsYbl7isPJGXF5yLA6XMoIC5RbX7GYB1crRd3ABwzs4WGhgDhKwuoJDtbmneN97Y0eGihaEx3wLSEQaMv/rnL4DKqhQLcZexUTiWg2jK96TC11bxMBsuOCy3ZnRRkWLA1bg2DhkNPFIUrOh0nU/o3jDDokEVfOCrAFuAA/vBflQzsBQzNrYLOkHtkRWhpQS4mbMB5Xb3iq/FwEYo+Kg4upbgd70fImyA08DGRPBcu0pHWP7W8iv6puF9G63Rc3hIf3kszsoqPEE0rJIgyHYRZhRyGcTLz/4ryBKU1KJZ9huxYL2u0h9QP3vtwRsKx7UL3clPu9KnMBs6AMOSlCyMhmF7ekN/jzQjHYWJEHW6fkCfONVJrM6twFU+Yg/hMvZJGsYFo/4W3nLewKdedGM5JZMORsIwvDpR4fqiAAA==",
        },
        {
          id: 1,
          link: "navy-polkadot-1-2.webp",
          alt: "navy-polkadot-1-2",
          blurDataUrl:
            "data:image/webp;base64,UklGRlgDAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggagEAADAXAJ0BKhoBvAA+7XawVamnJCMgKkEwHYlpbt2tJ5/9KdNvL8AFC4LDcupiKRR24dzernvRmWdFDBvVl8TankIE9u0FkgGao/IKeeev99JNGhtHX+72JZD5vzaYWJd802Dr7Xl0mKxfxE1xLBNpPzbL/aUcaEFXs+sknTlp/51Yw0mZgdwhjQTUk7L0XMwnHFZFSFjpUYNE2As5YiOIk4Ai2KyL4BEg938x1rhzst3gFh2XlU1rHXk6BxR3WvCP7nQAAP7vPPQIE9n2/O0HxOoTUJhb537UhtAYDVtv93bEXRWjMftUjpF4P27QfMYDmBiKYHxEv84xZN2/CUnTHvAd3lclpLlbxQSMHpZGumW+FQRCxlX5Uc+xYSHLlbKx9/OfiBU0xjMfU+KJyEZ4mDNWe9hQDj9bxQxgIFQ0eSKiAugP6MtdGvtBRiBJYcWaNpmI8gYNkWFcqwXeIhjuL9CL8h1cj4IAAAAA",
        },
        {
          id: 2,
          link: "navy-polkadot-1-3.webp",
          alt: "navy-polkadot-1-3",
          blurDataUrl:
            "data:image/webp;base64,UklGRmoDAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAEAAFAWAJ0BKhoBvAA+7XawVimnJCOgKZEwHYlpbuEnWL6r+1fxsIZfPwAVr/uc4sv5rV0MG2bwyfEQF7tNEqbqRO1GfLnpBe224vOyBc6Ehbbe90kDhBgMnP19A3cO6sDYv2sUO4/I3cTAN36uO6Sb41vhVGD5Qt9Tkl8StaIKmHSXyDtfbMc8ZtrXDfDpdx9TvsifdStE+33w292ab3sUpZzxmgb4be8lAgsMn/cHXAzwtC1CFa9CG5JcbzAA/t3SCwEqJqg/3mUx9iWUUUCumBns1QwODXvsDv3TtuaDiyxwa/U5Gh/KSHc5//f8Sw8AhpoNplNeff8OwSF3U1JjwHMBKrawLzMzVFyigixjLsuw7Fi4CYTiLs+tSgDaKvf0Mq1hiPks5ZZdIbqSI1tYvaFdyvqqsx+hcqFUXmkqiF/7dAJlOzeVXgCgT/Xv6VxQfUngQ3wbuXh3IkEkNQvuXji/x8rzn6Vwkxm5/ifQqxMqdFuqi87LnMErgAAA",
        },
      ],
      [
        {
          id: 0,
          link: "navy-polkadot-2-1.webp",
          alt: "navy-polkadot-2-1",
          blurDataUrl:
            "data:image/webp;base64,UklGRhYDAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKAEAADASAJ0BKhoBvAA+7Xa3VqmnJSOgKAEwHYlpbt47+R2cKAAtLcy/T2ygZeLofQvvsPwCT5zw3D9n1S5g8ElrtDmFEYuIZrTlihNuBc+JnzJjpQEmXwQxVOqPhK5jRdZ520Lq/G75OPbcLJroHAxKG+tEw5Vs3+QVtLpelC4sRJoczmybFgcpkij9W0EXedIMqyeOAGlkXT4sKoAA/u6ORd5IFvqZftDtNCFwD60+zwqwwLyxbYZEeqnj8k7z9N8oWLHKChy5VrStuegi5zAh//kpqLjtOT469xQSk0fcT8B5kL1xdTBAnbGJimh5mntbIeGOa9VYjnSSDRCS+OSaXFrTbEc8hZg3ERg77Txyjub6JqgUTDyfkt90CpwJRSEXLx3E7qU2jZgA",
        },
        {
          id: 1,
          link: "navy-polkadot-2-2.webp",
          alt: "navy-polkadot-2-2",
          blurDataUrl:
            "data:image/webp;base64,UklGRqYDAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgguAEAABAZAJ0BKhoBvAA+7XKtUamnJCKlkVzpMB2JaW7eOtveZf+1fxbf0A+MfoBdNNQjtNqeZjC9FLz7+sfp327ohojcfCQ5zqOI3KRxGtToxfYVv1Vk7vBHCHntMG64FS4bSQeZexpkFGKy0EdagR3FHL7mDP0Ets4N6mGsrcQWHjyarc0omI1HhjseKXcKTLPKsM5nx0cX03hnGYCxBxAUcqq7J6KIuoMLtQFLr3LdNtGABsjvOPhHxxlOTxSjIveAtan2rmCmTEu/K4pYeygP1AfwAP3I82M3d3vmQ/sniJa2b0krsyxyMGx8Fhn6xP0zgVdCmyLaGPIg5Qf5iONvdelBTP05m9MniaEwsbvwqI4yQ0aviztwt58A0TNb8K3OCX8jBisVCP5Nbdw77S0PaOnPo484LTDtt5nS00zFEe/0mW/UkCPy1Aep3F92+7CY2KKEhQiu7/AY6VmE0aDY6A+9MSO+OLQUOTijqvv6GhfIY/HRuuAdbAYwKbMk/TpC14ehjdvXLVoYz2IW9iwHfaWSpKk9Ex6Y/vinh+zL/1QziMmLjwpD8T61YDtZBNMIA6c+UZafAAAA",
        },
        {
          id: 2,
          link: "navy-polkadot-2-3.webp",
          alt: "navy-polkadot-2-3",
          blurDataUrl:
            "data:image/webp;base64,UklGRhADAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggIgEAAJASAJ0BKhoBvAA+7Xa3VqmnJSOgKAEwHYlpbt47+R9UKyfkAVm9YcILtMuv6e66UAX1BLZxNPddhyc9H6TPo8AlLw2SNPOhYNSrKOIM3UbVf3sLwB+iHQxxyfw8k0qY15eaS5q8ZJSzgcelZ1M0bh6+sYZ6ZtAbcnjrbXFOtSC/qxlfMVKwxf39FACNNetzreZm34wC5EgkYiyUDkAA/u5fEZ+jgVYjA/udSBMk/6jrweghFVYP+oajANv1+8RwmTCmhUGhLJ/yuDJrMojTmYjvzaspi4itylHDMqggN5K6Wi4cWmak3+M6RPXS6RSHFJNtnN/9TouVmZ8ShgEQ/cLqhGp9q9QfoQAguWQewCE+2JFUAo+4Eak4GNK2VAEmeCAA",
        },
      ],
    ],
  },
  {
    id: "summer-fashion-top-lace",
    title: "Summer Fashion Top Lace",
    price: "150.000 IDR",
    images: [
      [
        {
          id: 0,
          link: "summer-fashion-top-lace-1.webp",
          alt: "summer-fashion-top-lace-1",
          blurDataUrl:
            "data:image/webp;base64,UklGRhYDAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKAEAAPASAJ0BKhoBvAA+7Xa3VqmnJSOgKAEwHYlpbt+uMrO+PHED8gCewD7VaF9LteSM4borJd7ie9QpJ3Z85lxUzhwLl1N17C3jND1UDkEMzL94MAADDghLFT9TXz84RGMiApTzCsgQonDkrUr0ltqdVk0o6TINvHzXqKfLLgCDMs0oUtmcBVj4AuyUSIn6V8D5pKBHNiOjF0b75U6bnS1LxAAA/u2vGsgUQFMz6oLvjnLqrp9BYhYUTKlbrLk0DKrylUWpRLjX186pu5wNNDEGnjnd9G45QTJ1RELnydedxT11/VMQPVov+6hRruqje8M8FE/LuX+kc68gp4SUGQlUge52lraOYHBaBqwQSPOmVviubClfhox9oZ4iu7AzLcgn0VSRnzSAAAAA",
        },
        {
          id: 1,
          link: "summer-fashion-top-lace-2.webp",
          alt: "summer-fashion-top-lace-2",
          blurDataUrl:
            "data:image/webp;base64,UklGRvIDAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBAIAADAZAJ0BKhoBvAA+7W6yVKmlpCMicQoJMB2JaW7gBmH/+RjNwM/+gOmcTYx7mfIA4F7bmncGaPOH5NiRo5/KjJEFklGAiW55PxWUx4XP7EhPZ05dGUJ+32QhTtSCVLSjNZMjfDt4jO1USldn9I+0qb7oMCUZvgj3eBx9DJo01DOtAKglrer+ZYRjO2IwYdrg9aW5hZeVmnkDrNYfYgfzDRmmxExhuItMWR6ahHrOxi0jZc6VqUza0E/TnfdeMFqunCH/D6P1p/+2VmyA2MZmPphzYAD+6SMYlsBJ9r5AAiypCOHARA/yoNilFVsqM79WnBUYjq9M+0sAnsO4p46VaLRtYe0+8J8j+/goWN1yEGvi6Op1vyR+nzCD7QFVvwFrH4TrItHtG83OekgpC9dufo0SuIn3Y6oPKW7d7j5iBi/jBNFOmkhUvKN8F8ZeIYwJeLd9UtOu63oro3nnaUzo183rs74l45Oo6dhLBUdfhmeBnUQL8yj3OPAYeWCk4X3ok10eYeY2jN1avnlwiMBaY4aflR64HFL1cvHkhNjuIhNzvyynWVc6TlRnZJkhwN6Tlgk4GAKkxlSyPM68K+86RiHnCNWmEspvSqz+ZGqM6plLLD+O3pb8dqxvB0vm507WM3trxyVSSoj8L0BBdJaeRoPMB6U2+pKd6wAcqY0QyGXaKIcAAA==",
        },
        {
          id: 2,
          link: "summer-fashion-top-lace-3.webp",
          alt: "summer-fashion-top-lace-3",
          blurDataUrl:
            "data:image/webp;base64,UklGRg4DAABXRUJQVlA4WAoAAAAgAAAAGQEAuwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggIAEAAJASAJ0BKhoBvAA+7Xa3VqmnJSOgKAEwHYlpbt47+R9UqSfkAVm9YcILtKgWT3XQrhDFml6w4e3fciKPChb/Rn1YTF3DfnW8ZLA/e5ksFpIjQx62OjxCJQ4jQ2pvIKsm0oFWPf2pBXdFT951LzgMBolpWAUt/RP5/zAI6ybZmdd8+T0kMzGWI5ocZF0b+c7AD5+TxZNks0HOggHUP4AA/u5dN48w+Dwo6dleobNog2IZzqFMzjbFITo3FdKkudXS8ACpuRefDfrjumFS/9bR7IjOXXnWaUddBjwC+nC5BZMspJftRumlcfgFuENNMRM/bqKvDeWVhlBZ3dm1wbqNcHABfPamwjCsY2I443N74JbkDc5UXdwiIc59MpWGYTIAAA==",
        },
      ],
    ],
  },
];

export default dress;
