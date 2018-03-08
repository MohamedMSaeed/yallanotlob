class User < ApplicationRecord
  has_many :orders, dependent: :destroy
  has_many :groups, dependent: :destroy

end
